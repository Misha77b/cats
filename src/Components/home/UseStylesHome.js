import { makeStyles } from '@mui/styles';

const UseStylesHome = makeStyles({
    '@global': {
        '.home': {
            // width: '100%',
            // height: '80px',
            // background: 'rgba(10, 10, 10, 0.7)',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',    
            // ['@media (max-width: 425px)']: {
            //     height: '60px',
            // }


            // for sticky position think more and for header-logo too
            // position: '-webkit-sticky',
            // position: 'sticky',
            // width: '446px',
            // height: '450px',
            position: 'fixed'
        },
        '.home-title': {
            marginTop: '80px',
            fontFamily: 'Jost',
            fontSize: '44px',
            fontWeight: '500',
            color: '#1D1D1D',
        },
        '.home-subtitle': {
            marginTop: '10px',
            fontFamily: 'Jost',
            fontSize: '20px',
            fontWeight: '400',
            color: '#8C8C8C',
        },
        '.home-menu-container': {

        },
        '.home-starts-title': {
            marginTop: '60px',
            fontFamily: 'Jost',
            fontSize: '20px',
            fontWeight: '500',
            color: '#1D1D1D',
        }, 
        '.home-menu': {
            // have some questions and thoughts about layout of items
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px'
        }, 
        '.menu-image-container': {
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '138px',
            height: '198px',
            border: '2px solid green',
            borderRadius: '20px',
        },
        '.vote-container': {
            background: '#B4B7FF',
            border: '4px solid rgba(255, 255, 255, 0.6)',

        },
        '.breed-container': {
            background: "#97EAB9",
            border: "4px solid rgba(255, 255, 255, 0.6)",
        },
        '.search-container': {
            background: '#FFD280',
            border: '4px solid rgba(255, 255, 255, 0.6)',
        },
        '.home-btn': {
            fontFamily: "Jost",
            fontSize: '12px',
            fontWeight: '500'
        },
        // '.vote-table': {
        //     width: '117px',
        //     height: '163px'
        // },
        // '.pet-breeds': {
        //     width: '117px',
        //     height: '163px'
        // },
        // '.images-search': {
        //     width: '112px',
        //     height: '190px'
        // }
    }
})

export default UseStylesHome;