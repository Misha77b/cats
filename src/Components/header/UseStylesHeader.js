import { makeStyles } from '@mui/styles';

const UseStylesHeader = makeStyles({
    '@global': {
        '.header': {
            // position: 'relative',
            // width: '107px',
            // height: '24px'
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
        '.logo-img': { 
            position: 'fixed',
        }
    }
})

export default UseStylesHeader;