
import { loader } from '../assets'
import { Box, Heading, Img } from './Styles';

const Loader = ({ title }) => (
    <Box width='full' flexDirection='column' justifyContent='center' alignItems='center'>
        <Img src={loader} alt="loader" width={'8rem'} height={'8rem'} />
        <Heading>{title || "loading..."}</Heading>
    </Box>
);

export default Loader;  