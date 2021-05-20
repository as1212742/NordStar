import Input from 'aws-northstar/components/Input';
import Stack from 'aws-northstar/layouts/Stack';
import Container from 'aws-northstar/layouts/Container';
import React, { useContext } from 'react'
import {DataContext} from '../../../context/Provider'


const ThirdForm = () => {

    const {PageState,CreatePageState} = useContext(DataContext)
  
    return (
            <Stack>
                <Container headingVariant='h4' title='Read Only Input'>
                    <Input value={PageState.Eks.type} readonly={true} type="text" />
                </Container>

               
            </Stack>
    )
}






export default ThirdForm