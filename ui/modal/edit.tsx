/** @jsxImportSource @emotion/react */
import { FormControl, FormLabel, RadioGroup, HStack, Radio, FormHelperText, Input, Textarea, ButtonGroup, Button, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { boardEditStyle } from "../../styles/survey-board/edit.style";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { IReqSurveyCreate } from "../../httpType/survey.type";
import { httpSurveyUpdate } from "../../http/survey.http";
import { useRecoilValue } from "recoil";
import { userInfoState } from "../../atoms/auth.atom";

interface IEditInputs {
  title: string,
  time: string,
  target: string,
  endDate: any,
  link: string,
  description?: string
}

const Edit = (props: any) => {
  const [surveyDetail, setSurveyDetail] = useState(props.surveyDetail);
  console.debug(`SUJIN:: ~ Edit ~ surveyDetail`, surveyDetail)

  const userInfo = useRecoilValue(userInfoState)
  const { register, handleSubmit, getValues, trigger, control, formState: { errors, isSubmitting, dirtyFields } } = useForm<IEditInputs>();
  const { onChange, ref, name } = register('time');

  const onSubmit = async ({ title, time, target, endDate, link, description }: IEditInputs) => {
    try {
      const params: IReqSurveyCreate = { title, time, target, endDate: endDate.getTime(), link, description }
      console.debug(`SUJIN:: ~ onSubmit ~ params`, params)
      const updateRes = await httpSurveyUpdate(params, userInfo)

      if (window.confirm('수정하시겠습니까?')) {
        alert('수정되었습니다')
        setSurveyDetail(updateRes);
        props.onClose();
      }
    } catch (error: any) {
      console.debug(`SUJIN:: ~ onSubmit ~ error`, JSON.stringify(error))
    }
  }

  const endDate_ = +surveyDetail?.endDate;
  const [startDate, setStartDate] = useState(new Date(endDate_));

  return (
    <div css={boardEditStyle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* title */}
        <FormControl isRequired>
          <FormLabel htmlFor='title'>Title</FormLabel>
          <Input id='title' placeholder='Title'
            {
            ...register('title', {
              required: 'This is required',
              value: `${surveyDetail.title}`,
              onBlur: async () => await trigger('title')
            })
            } />
        </FormControl>
        {/* time */}
        <FormControl isRequired>
          <FormLabel as='legend'>Duration of time</FormLabel>
          <Controller
            name='time'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioGroup defaultValue={`${surveyDetail.time}`} name={name} ref={ref} onChange={onChange} value={value}>
                <HStack spacing='24px'>
                  <Radio value='1-3분'>1-3분</Radio>
                  <Radio value='4-6분'>4-6분</Radio>
                  <Radio value='7-9분'>7-9분</Radio>
                  <Radio value='10분 이상'>10분 이상</Radio>
                </HStack>
              </RadioGroup>
            )}
          />
        </FormControl>
        {/* target */}
        <FormControl isRequired>
          <FormLabel htmlFor='target'>Target</FormLabel>
          <Input id='target' placeholder='target'
            {
            ...register('target', {
              required: 'This is required',
              value: `${surveyDetail.target}`,
              onBlur: async () => await trigger('target')
            })
            }
          />
        </FormControl>
        {/* date (end date) */}
        <FormControl isRequired>
          <FormLabel htmlFor="enddate">End Date</FormLabel>
          <Controller
            control={control}
            defaultValue={startDate}
            name='endDate'
            render={({ field: { onChange, value } }) => (
              <DatePicker
                className="custom-datepicker"
                onChange={onChange}
                selected={value}
              />
            )}
          />
        </FormControl>
        {/* link */}
        <FormControl isRequired>
          <FormLabel htmlFor='target'>Link</FormLabel>
          <Input id='link' placeholder='link'
            {
            ...register('link', {
              required: 'This is required',
              value: `${surveyDetail.link}`,
              onBlur: async () => await trigger('link')
            })
            }
          />
        </FormControl>
        {/* description */}
        <FormControl>
          <FormLabel as='legend'>description</FormLabel>
          <Textarea
            placeholder='Here is a description'
            size='sm'
            resize={'none'}
            {
            ...register('description', {
              value: `${surveyDetail.description}`,
              onBlur: async () => await trigger('description')
            })
            }
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

export default Edit