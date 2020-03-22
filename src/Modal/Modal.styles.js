export default {
    wrapper: {
        position: 'fixed',
        zIndex: 99999,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        position: 'relative',
        background: 'white',
        boxSizing: 'borderBox',
        border: '1px solid grey',
        borderRadius: 3,
        height: '90%',
        width: '90%',
        maxWidth: ({ maxWidth, fluid }) => !fluid && maxWidth,
        minWidth: ({ minWidth, fluid }) => !fluid && minWidth,
        maxHeight: ({ maxHeight, fluid }) => !fluid && maxHeight,
        minHeight: ({ minHeight }) => minHeight,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
    },
    header: {
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid grey',
        padding: '15px 20px',
        boxSizing: 'borderBox',
    },
    close: {
        position: 'absolute',
        right: 10,
        top: 10,
        background: 'none',
        border: 'none',
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: 'black',
        },
        '&:focus': {
            color: 'black',
            outline: 0,
        },
    },
    content: {
        flexGrow: 1,
        overflow: 'auto',
        '-webkit-overflow-scrolling': 'touch',
        height: 'auto',
        margin: '20px 15px',
    },
    footer: {
        flexShrink: 0,
        borderTop: '1px solid grey',
        padding: '15px 20px',
        boxSizing: 'borderBox',
    },
    overlay: {
        position: 'fixed',
        zIndex: 99998,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: 'rgba(0, 0, 0, .4)',
    },
};
