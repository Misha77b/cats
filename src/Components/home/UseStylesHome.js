import { makeStyles } from '@mui/styles';

const UseStylesHome = makeStyles({
    '@global': {
        '.header': {
            // width: '100%',
            // height: '80px',
            // background: 'rgba(10, 10, 10, 0.7)',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'space-between',    
            // ['@media (max-width: 425px)']: {
            //     height: '60px',
            // }
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
            // have some questions and thoughts
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        }, 
        '.vote-table': {

        },
        '.pet-breeds': {

        },
        '.images-search': {

        }
    }
})

export default UseStylesHome;