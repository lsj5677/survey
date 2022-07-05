/** @jsxImportSource @emotion/react */
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import { httpSurveyReadAll, httpTest } from "../../http/survey.http"
import DefaultTemplate from "../../template/default.template"
import { boardListStyle } from "../../styles/survey-board/list.style"
import { withIronSessionSsr } from "iron-session/next/dist"
import { withSessionSsr } from "../../utils/session.util"
import axios from "axios"
import Link from "next/link"
import { useRecoilValue } from "recoil"
import { authIsLogin } from "../../selectors/auth.selector"
import dayjs from 'dayjs'
import Write from "./write"

interface IBoardListProps {
  user: any,
  surveyList: any
}

/** 쿠키 매번 넣어줄 때는 이렇게 귀찮으니 interceptor로 구현*/
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    try {

      console.log(`SUJIN:: ~ getServerSideProps ~ req.session.user`, req.session.user)
      const surveyList = await httpSurveyReadAll(req.session.user);
      return {
        props: {
          user: req?.session?.user ?? null,
          surveyList
        }
      }
    } catch (error) {
      console.log(`SUJIN:: ~ getServerSideProps ~ error`, error)
      return {
        props: {
          user: req?.session?.user ?? null,
          surveyList: [],
        },
      };
    }
  },
);

const List: FunctionComponent<IBoardListProps> = ({ user, surveyList }) => {
  const [list, setList] = useState(surveyList);

  const isLogin = useRecoilValue(authIsLogin);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)



  return (
    <DefaultTemplate>
      {/* <button onClick={() => { httpTest() }}>test-button</button> */}
      <div css={boardListStyle}>
        <div className="board-list-container">
          <div className="per-page-count">
            <span>Show rows per page</span>
            <Select size={'sm'} defaultValue={'option2'}>
              <option value='option1'>5</option>
              <option value='option2'>10</option>
              <option value='option3'>15</option>
            </Select>
          </div>
          <TableContainer>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th width={'40%'}>Title</Th>
                  <Th>Time</Th>
                  <Th>Target</Th>
                  <Th>End date</Th>
                  <Th>Tag</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  list.map(({ title, date, time, target, createdAt }: any, index: number) => {
                    return <Tr key={index}>
                      <Td><Link href={'/survey-board/detail'}>{title}</Link></Td>
                      <Td>{time}</Td>
                      <Td>{target}</Td>
                      <Td>{dayjs(createdAt).format('YYYY-MM-DD')}</Td>
                      <Td>
                        <HStack spacing={4}>
                          <Tag variant='solid' colorScheme='blue'>tag1</Tag>
                          <Tag variant='solid' colorScheme='blue'>tag2</Tag>
                          <Tag variant='solid' colorScheme='blue'>tag3</Tag>
                        </HStack>
                      </Td>
                    </Tr>
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
          <Button onClick={onOpen} className='write-button'>Write</Button>
          <div className="pagination">
            <ul>
              <li><a href="">1</a></li>
              <li className="active"><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">5</a></li>
            </ul>
          </div>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size={'xl'}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Write</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Write onClose={onClose} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default List