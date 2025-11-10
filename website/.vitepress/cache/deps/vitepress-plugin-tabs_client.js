import {
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  Fragment,
  inject,
  nextTick,
  onBeforeMount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  toRef,
  unref,
  useId,
  useSlots,
  watch,
} from './chunk-EGCDEWAW.js'

// ../node_modules/.pnpm/vitepress-plugin-tabs@0.7.3_vitepress@1.6.4_@algolia+client-search@5.41.0_@types+node@2_9c8c157d410690e5423cd512e1a5a937/node_modules/vitepress-plugin-tabs/dist/client/browser/index.js
import '/Users/jasonkuhrt/projects/jasonkuhrt/graffle/node_modules/.pnpm/vitepress-plugin-tabs@0.7.3_vitepress@1.6.4_@algolia+client-search@5.41.0_@types+node@2_9c8c157d410690e5423cd512e1a5a937/node_modules/vitepress-plugin-tabs/dist/client/browser/index.css'
var useStabilizeScrollPosition = (targetEle) => {
  if (typeof document === 'undefined') {
    const mock = (f) => async (...args) => f(...args)
    return { stabilizeScrollPosition: mock }
  }
  const scrollableEleVal = document.documentElement
  const stabilizeScrollPosition = (func) => async (...args) => {
    const result = func(...args)
    const eleVal = targetEle.value
    if (!eleVal) return result
    const offset = eleVal.offsetTop - scrollableEleVal.scrollTop
    await nextTick()
    scrollableEleVal.scrollTop = eleVal.offsetTop - offset
    return result
  }
  return { stabilizeScrollPosition }
}
var injectionKey$1 = 'vitepress:tabSharedState'
var ls = typeof localStorage !== 'undefined' ? localStorage : null
var localStorageKey = 'vitepress:tabsSharedState'
var getLocalStorageValue = () => {
  const rawValue = ls == null ? void 0 : ls.getItem(localStorageKey)
  if (rawValue) {
    try {
      return JSON.parse(rawValue)
    } catch {
    }
  }
  return {}
}
var setLocalStorageValue = (v) => {
  if (!ls) return
  ls.setItem(localStorageKey, JSON.stringify(v))
}
var provideTabsSharedState = (app) => {
  const state = reactive({})
  watch(() => state.content, (newStateContent, oldStateContent) => {
    if (newStateContent && oldStateContent) setLocalStorageValue(newStateContent)
  }, { deep: true })
  app.provide(injectionKey$1, state)
}
var useTabsSelectedState = (acceptValues, sharedStateKey) => {
  const sharedState = inject(injectionKey$1)
  if (!sharedState) throw new Error('[vitepress-plugin-tabs] TabsSharedState should be injected')
  onMounted(() => {
    if (!sharedState.content) sharedState.content = getLocalStorageValue()
  })
  const nonSharedState = ref()
  const selected = computed({
    get() {
      var _a
      const key = sharedStateKey.value
      const acceptVals = acceptValues.value
      if (key) {
        const value = (_a = sharedState.content) == null ? void 0 : _a[key]
        if (value && acceptVals.includes(value)) return value
      } else {
        const nonSharedStateVal = nonSharedState.value
        if (nonSharedStateVal) return nonSharedStateVal
      }
      return acceptVals[0]
    },
    set(v) {
      const key = sharedStateKey.value
      if (key) {
        if (sharedState.content) sharedState.content[key] = v
      } else nonSharedState.value = v
    },
  })
  const select = (newValue) => {
    selected.value = newValue
  }
  return {
    selected,
    select,
  }
}
function useTabLabels() {
  const slots = useSlots()
  return computed(() => {
    var _a
    const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots)
    if (!defaultSlot) return []
    return defaultSlot.filter((vnode) =>
      typeof vnode.type === 'object' && '__name' in vnode.type && vnode.type.__name === 'PluginTabsTab' && vnode.props
    ).map((vnode) => {
      var _a2
      return (_a2 = vnode.props) == null ? void 0 : _a2.label
    })
  })
}
var injectionKey = 'vitepress:tabSingleState'
var provideTabsSingleState = (state) => {
  provide(injectionKey, state)
}
var useTabsSingleState = () => {
  const singleState = inject(injectionKey)
  if (!singleState) throw new Error('[vitepress-plugin-tabs] TabsSingleState should be injected')
  return singleState
}
var useIsPrint = () => {
  const matchMedia = typeof window !== 'undefined' ? window.matchMedia('print') : void 0
  const value = ref(matchMedia == null ? void 0 : matchMedia.matches)
  const listener = () => {
    value.value = matchMedia == null ? void 0 : matchMedia.matches
  }
  onBeforeMount(() => {
    matchMedia == null ? void 0 : matchMedia.addEventListener('change', listener)
  })
  onUnmounted(() => {
    matchMedia == null ? void 0 : matchMedia.removeEventListener('change', listener)
  })
  return value
}
var _hoisted_1$1 = { class: 'plugin-tabs' }
var _hoisted_2 = [
  'id',
  'aria-selected',
  'aria-controls',
  'tabindex',
  'onClick',
]
var PluginTabs_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: 'PluginTabs',
  props: { sharedStateKey: {} },
  setup(__props) {
    const props = __props
    const isPrint = useIsPrint()
    const tabLabels = useTabLabels()
    const { selected, select } = useTabsSelectedState(tabLabels, toRef(props, 'sharedStateKey'))
    const tablist = ref()
    const { stabilizeScrollPosition } = useStabilizeScrollPosition(tablist)
    const selectStable = stabilizeScrollPosition(select)
    const buttonRefs = ref([])
    const onKeydown = (e) => {
      var _a
      const currentIndex = tabLabels.value.indexOf(selected.value)
      let selectIndex
      if (e.key === 'ArrowLeft') selectIndex = currentIndex >= 1 ? currentIndex - 1 : tabLabels.value.length - 1
      else if (e.key === 'ArrowRight') selectIndex = currentIndex < tabLabels.value.length - 1 ? currentIndex + 1 : 0
      if (selectIndex !== void 0) {
        selectStable(tabLabels.value[selectIndex])
        ;(_a = buttonRefs.value[selectIndex]) == null ? void 0 : _a.focus()
      }
    }
    const uid = useId()
    provideTabsSingleState({
      uid,
      selected,
    })
    return (_ctx, _cache) => {
      return openBlock(),
        createElementBlock('div', _hoisted_1$1, [
          createBaseVNode('div', {
            ref_key: 'tablist',
            ref: tablist,
            class: 'plugin-tabs--tab-list',
            role: 'tablist',
            onKeydown,
          }, [
            (openBlock(true),
              createElementBlock(
                Fragment,
                null,
                renderList(unref(tabLabels), (tabLabel) => {
                  return openBlock(),
                    createElementBlock(
                      'button',
                      {
                        id: `tab-${tabLabel}-${unref(uid)}`,
                        ref_for: true,
                        ref_key: 'buttonRefs',
                        ref: buttonRefs,
                        key: tabLabel,
                        role: 'tab',
                        class: 'plugin-tabs--tab',
                        'aria-selected': tabLabel === unref(selected) && !unref(isPrint),
                        'aria-controls': `panel-${tabLabel}-${unref(uid)}`,
                        tabindex: tabLabel === unref(selected) ? 0 : -1,
                        onClick: () => unref(selectStable)(tabLabel),
                      },
                      toDisplayString(tabLabel),
                      9,
                      _hoisted_2,
                    )
                }),
                128,
              )),
          ], 544),
          renderSlot(_ctx.$slots, 'default'),
        ])
    }
  },
})
var PluginTabs_default = PluginTabs_vue_vue_type_script_setup_true_lang_default
var _hoisted_1 = [
  'id',
  'aria-labelledby',
  'data-is-print',
]
var PluginTabsTab_vue_vue_type_script_setup_true_lang_default = defineComponent({
  __name: 'PluginTabsTab',
  props: { label: {} },
  setup(__props) {
    const { uid, selected } = useTabsSingleState()
    const isPrint = useIsPrint()
    return (_ctx, _cache) => {
      return unref(selected) === _ctx.label || unref(isPrint)
        ? (openBlock(),
          createElementBlock(
            'div',
            {
              key: 0,
              id: `panel-${_ctx.label}-${unref(uid)}`,
              class: 'plugin-tabs--content',
              role: 'tabpanel',
              tabindex: '0',
              'aria-labelledby': `tab-${_ctx.label}-${unref(uid)}`,
              'data-is-print': unref(isPrint),
            },
            [renderSlot(_ctx.$slots, 'default', {}, void 0, true)],
            8,
            _hoisted_1,
          ))
        : createCommentVNode('v-if', true)
    }
  },
})
var export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc
  for (const [key, val] of props) target[key] = val
  return target
}
var PluginTabsTab_default = export_helper_default(PluginTabsTab_vue_vue_type_script_setup_true_lang_default, [[
  '__scopeId',
  'data-v-3044dfca',
]])
var enhanceAppWithTabs = (app) => {
  provideTabsSharedState(app)
  app.component('PluginTabs', PluginTabs_default)
  app.component('PluginTabsTab', PluginTabsTab_default)
}
export { enhanceAppWithTabs }
// # sourceMappingURL=vitepress-plugin-tabs_client.js.map
