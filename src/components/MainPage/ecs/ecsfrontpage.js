import Stack from 'aws-northstar/layouts/Stack';
import Box from 'aws-northstar/layouts/Box';
import Forms from './forms/forms'
import Home from '../home/Home'

const MainContent = () => {
    return (
            <Box bgcolor="grey.300" width="100%" height="1000px">
                <Stack>
                <Forms/>
                </Stack>
            </Box>
    )
}

export default MainContent;