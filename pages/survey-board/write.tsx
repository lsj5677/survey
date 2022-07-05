/** @jsxImportSource @emotion/react */
import { FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText, Input, Textarea, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { boardWriteStyle } from "../../styles/survey-board/write.style";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

interface IWriteInputs {
  title: string,
  time: string,
  target: string,
  endDate: Date,
  tag?: [],
  link: string,
  description?: string
}

const Write = (props: any) => {
  const { register, handleSubmit, getValues, trigger, formState: { errors, isSubmitting, dirtyFields } } = useForm<IWriteInputs>();
  const router = useRouter();

  const onSubmit = async ({ title, time, target, endDate, tag, link, description }: IWriteInputs) => {
    try {
      alert('등록되었습니다')

    } catch (error: any) {
      console.log(`SUJIN:: ~ onSubmit ~ error`, JSON.stringify(error))
    }
  }

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div css={boardWriteStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <FormControl isRequired>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' placeholder='Title' />
        </FormControl>
        {/* time */}
        <FormControl isRequired>
          <FormLabel as='legend'>Duration of time</FormLabel>
          <RadioGroup defaultValue='a'>
            <HStack spacing='24px'>
              <Radio value='a'>1-3분</Radio>
              <Radio value='b'>4-6분</Radio>
              <Radio value='c'>7-9분</Radio>
              <Radio value='d'>10분 이상</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
        {/* target */}
        <FormControl isRequired>
          <FormLabel htmlFor='target'>Target</FormLabel>
          <Input id='target' placeholder='target' />
        </FormControl>
        {/* date (end date) */}
        <FormControl isRequired>
          <FormLabel htmlFor="enddate">End Date</FormLabel>
          <DatePicker
            className="custom-datepicker"
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          />
        </FormControl>
        {/* link */}
        <FormControl isRequired>
          <FormLabel htmlFor='target'>Link</FormLabel>
          <Input id='link' placeholder='link' />
        </FormControl>
        {/* description */}
        <FormControl>
          <FormLabel as='legend'>description</FormLabel>
          <Textarea
            placeholder='Here is a description'
            size='sm'
            resize={'none'}
          />
        </FormControl>
        <ButtonGroup gap={4} className='button-group'>
          <Button onClick={props.onClose}>Cancel</Button>
          <Button className="submit" type='submit' colorScheme='blue'>Save</Button>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default Write