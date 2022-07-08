import { makeStyles } from '@mui/styles';

const UseStylesHomeLayout = makeStyles({
    '@global': {
        '.main-basic-layout': {
            position: 'relative',
            backgroundImage: 'url(../assets/homePage/petHugBackground.png)',
            backgroundRepeat :'no-repeat',
            backgroundPosition: 'top 30px right 30px',
        },
        '.hug-image': {
        },
    }
})

export default UseStylesHomeLayout;