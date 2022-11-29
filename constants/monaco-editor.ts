// TODO: TYPES
export const MONACO_EDITOR_DEFAULT_OPTIONS = {
    minimap: { enabled: false },
    renderOverviewRuler: false,
    scrollBeyondLastColumn: 5,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    contextmenu: false,
    smoothScrolling: true,
    wordWrap: 'on',
    quickSuggestions: false,
    formatOnType: true,
    formatOnPaste: true,
    insertSpaces: true,
    tabSize: 4,
    detectIndentation: false,
    scrollbar: {
        alwaysConsumeMouseWheel: true,
        useShadows: false,
        vertical: 'visible',
        verticalScrollbarSize: 10
    },
    enableSplitViewResizing: false,
    renderSideBySide: true
} as const
