<template>
    <button
        class="wo-button"
        :class="[`wo-button--${type}`, {
            'is-disabled': disabled,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
        }]"
        :disabled="disabled"
        @click="handleClick"
    >
        <span><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: 'WoButton',
  //   props: ['type'],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  created () {
    // console.log('create-type=', this.type)
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./theme-chalk/src/common/var";

.wo-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    user-select: none;
    transition: 0.1s;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    & + & { // 两个连续的button，中间隔10px距离
        margin-left: 10px;
    }

    &.is-round {
        border-radius: 20px;
    }

    &.is-circle {
        border-radius: 50%;
        padding: $--button-padding-vertical;
    }

    &.is-disabled {
        &,
        &:hover,
        &:focus {
            color: $--button-disabled-font-color;
            cursor: not-allowed;
            background-image: none;
            background-color: $--button-disabled-background-color;
            border-color: $--button-disabled-border-color;
        }

        &.el-button--text {
            background-color: transparent;
        }

        &.is-plain {
            &,
            &:hover,
            &:focus {
                background-color: $--color-white;
                border-color: $--button-disabled-border-color;
                color: $--button-disabled-font-color;
            }
        }
    }

    /* @include when(circle) {
        border-radius: 50%;
        padding: $--button-padding-vertical;
    } */

    &--primary {
        color: $--button-primary-font-color;
        background-color: $--button-primary-background-color;
        border-color: $--button-primary-border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $--button-primary-background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $--button-primary-border-color, $--button-hover-tint-percent);
            color: $--button-primary-font-color;
        }
        &.is-plain {
            color: $--button-primary-background-color;
            background: mix($--color-white, $--button-primary-background-color, 90%);
            border-color: mix($--color-white, $--button-primary-background-color, 60%);

            &:hover,
            &:focus {
                background: $--button-primary-background-color;
                border-color: $--button-primary-background-color;
                color: $--color-white;
            }

            &.is-disabled {
                &,
                &:hover,
                &:focus,
                &:active {
                color: mix($--color-white, $--button-primary-background-color, 40%);
                background-color: mix($--color-white, $--button-primary-background-color, 90%);
                border-color: mix($--color-white, $--button-primary-background-color, 80%);
                }
            }
        }

        &.is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
                color: $--color-white;
                background-color: mix($--button-primary-background-color, $--color-white);
                border-color: mix($--button-primary-border-color, $--color-white);
            }
        }
    }
    &--success {
        color: $--button-success-font-color;
        background-color: $--button-success-background-color;
        border-color: $--button-success-border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $--button-success-background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $--button-success-border-color, $--button-hover-tint-percent);
            color: $--button-success-font-color;
        }
        &.is-plain {
            color: $--button-success-background-color;
            background: mix($--color-white, $--button-success-background-color, 90%);
            border-color: mix($--color-white, $--button-success-background-color, 60%);

            &:hover,
            &:focus {
                background: $--button-success-background-color;
                border-color: $--button-success-background-color;
                color: $--color-white;
            }
            &.is-disabled {
                &,
                &:hover,
                &:focus,
                &:active {
                color: mix($--color-white, $--button-success-background-color, 40%);
                background-color: mix($--color-white, $--button-success-background-color, 90%);
                border-color: mix($--color-white, $--button-success-background-color, 80%);
                }
            }
        }
        &.is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
                color: $--color-white;
                background-color: mix($--button-success-background-color, $--color-white);
                border-color: mix($--button-success-border-color, $--color-white);
            }
        }
    }
    &--info {
        color: $--button-info-font-color;
        background-color: $--button-info-background-color;
        border-color: $--button-info-border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $--button-info-background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $--button-info-border-color, $--button-hover-tint-percent);
            color: $--button-info-font-color;
        }
        &.is-plain {
            color: $--button-info-background-color;
            background: mix($--color-white, $--button-info-background-color, 90%);
            border-color: mix($--color-white, $--button-info-background-color, 60%);

            &:hover,
            &:focus {
                background: $--button-info-background-color;
                border-color: $--button-info-background-color;
                color: $--color-white;
            }
            &.is-disabled {
                &,
                &:hover,
                &:focus,
                &:active {
                    color: mix($--color-white, $--button-info-background-color, 40%);
                    background-color: mix($--color-white, $--button-info-background-color, 90%);
                    border-color: mix($--color-white, $--button-info-background-color, 80%);
                }
            }
        }
        &.is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
                color: $--color-white;
                background-color: mix($--button-info-background-color, $--color-white);
                border-color: mix($--button-info-border-color, $--color-white);
            }
        }
    }
    &--warning {
        color: $--button-warning-font-color;
        background-color: $--button-warning-background-color;
        border-color: $--button-warning-border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $--button-warning-background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $--button-warning-border-color, $--button-hover-tint-percent);
            color: $--button-warning-font-color;
        }
        &.is-plain {
            color: $--button-warning-background-color;
            background: mix($--color-white, $--button-warning-background-color, 90%);
            border-color: mix($--color-white, $--button-warning-background-color, 60%);

            &:hover,
            &:focus {
                background: $--button-warning-background-color;
                border-color: $--button-warning-background-color;
                color: $--color-white;
            }
            &.is-disabled {
                &,
                &:hover,
                &:focus,
                &:active {
                    color: mix($--color-white, $--button-warning-background-color, 40%);
                    background-color: mix($--color-white, $--button-warning-background-color, 90%);
                    border-color: mix($--color-white, $--button-warning-background-color, 80%);
                }
            }
        }
        &.is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
                color: $--color-white;
                background-color: mix($--button-warning-background-color, $--color-white);
                border-color: mix($--button-warning-border-color, $--color-white);
            }
        }
    }
    &--danger {
        color: $--button-danger-font-color;
        background-color: $--button-danger-background-color;
        border-color: $--button-danger-border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $--button-danger-background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $--button-danger-border-color, $--button-hover-tint-percent);
            color: $--button-danger-font-color;
        }
        &.is-plain {
            color: $--button-danger-background-color;
            background: mix($--color-white, $--button-danger-background-color, 90%);
            border-color: mix($--color-white, $--button-danger-background-color, 60%);

            &:hover,
            &:focus {
                background: $--button-danger-background-color;
                border-color: $--button-danger-background-color;
                color: $--color-white;
            }
            &.is-disabled {
                &,
                &:hover,
                &:focus,
                &:active {
                    color: mix($--color-white, $--button-danger-background-color, 40%);
                    background-color: mix($--color-white, $--button-danger-background-color, 90%);
                    border-color: mix($--color-white, $--button-danger-background-color, 80%);
                }
            }
        }
        &.is-disabled {
            &,
            &:hover,
            &:focus,
            &:active {
                color: $--color-white;
                background-color: mix($--button-danger-background-color, $--color-white);
                border-color: mix($--button-danger-border-color, $--color-white);
            }
        }
    }

    /* @mixin button-variant($color, $background-color, $border-color) {
        color: $color;
        background-color: $background-color;
        border-color: $border-color;

        &:hover,
        &:focus {
            background: mix($--color-white, $background-color, $--button-hover-tint-percent);
            border-color: mix($--color-white, $border-color, $--button-hover-tint-percent);
            color: $color;
        }
    }

    @include m(primary) {
        @include button-variant($--button-primary-font-color, $--button-primary-background-color, $--button-primary-border-color);
    }
    @include m(success) {
        @include button-variant($--button-success-font-color, $--button-success-background-color, $--button-success-border-color);
    }
    @include m(warning) {
        @include button-variant($--button-warning-font-color, $--button-warning-background-color, $--button-warning-border-color);
    }
    @include m(danger) {
        @include button-variant($--button-danger-font-color, $--button-danger-background-color, $--button-danger-border-color);
    }
    @include m(info) {
        @include button-variant($--button-info-font-color, $--button-info-background-color, $--button-info-border-color);
    } */
}
</style>
