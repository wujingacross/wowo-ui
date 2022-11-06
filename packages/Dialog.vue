<template>
  <transition name="dialog-fade">
    <div class="wo-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div
          class="wo-dialog"
          :style="style"
      >
          <div class="wo-dialog__header">
              <slot name="title">
                  <span class="wo-dialog__title">{{title}}</span>
              </slot>
              <button
                  type="button"
                  class="wo-dialog__headerbtn"
              >
                  <!-- <i class="wo-dialog__close el-icon el-icon-close"></i> -->
                  <i class="wo-dialog__close el-icon el-icon-close" @click="handleClose">x</i>
              </button>
          </div>
          <div class="wo-dialog__body">
              <slot>
                  <span>内容</span>
              </slot>
          </div>
          <div class="wo-dialog__footer" v-if="$slots.footer">
              <slot name="footer"></slot>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WoDialog',
  props: {
    title: {
      type: String
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style () {
      const style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./theme-chalk/src/common/var";

.wo-dialog {
    position: relative;
    box-sizing: border-box;
    background: $--dialog-background-color;
    border-radius: $--border-radius-small;
    box-shadow: $--dialog-box-shadow;
    width: 50%;
    margin: 0 auto 50px;
    &__wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        overflow: auto;
    }
    &__header {
        padding: $--dialog-padding-primary;
        padding-bottom: 10px;
    }
    &__headerbtn {
        position: absolute;
        top: $--dialog-padding-primary;
        right: $--dialog-padding-primary;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: $--message-close-size;

        .el-dialog__close {
            color: $--color-info;
        }

        &:focus, &:hover {
            .el-dialog__close {
                color: $--color-primary;
            }
        }
    }
    &__body {
        padding: ($--dialog-padding-primary + 10px) $--dialog-padding-primary;
        color: $--color-text-regular;
        font-size: $--dialog-content-font-size;
        word-break: break-all;
    }
    &__footer {
        padding: $--dialog-padding-primary;
        padding-top: 10px;
        text-align: right;
        box-sizing: border-box;
    }
}
.dialog-fade-enter-active {
  animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
