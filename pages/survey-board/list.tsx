/** @jsxImportSource @emotion/react */
import { Button, FormControl, FormLabel, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Table, TableContainer, Tag, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { FunctionComponent, useEffect, useRef, useState } from "react"
import { httpSurveyReadAll } from "../../http/survey.http"
import DefaultTemplate from "../../template/default.template"
import { boardListStyle } from "../../styles/survey-board/list.style"
import { withIronSessionSsr } from "iron-session/next/dist"
import { withSessionSsr } from "../../utils/session.util"
import axios from "axios"
import Link from "next/link"
import { useRecoilState, useRecoilValue } from "recoil"
import { authIsLogin } from "../../selectors/auth.selector"
import dayjs from 'dayjs'
import Write from "./write"
import { userInfoState } from "../../atoms/auth.atom"
import { url } from "inspector"
import { useRouter } from "next/router"

interface IBoardListProps {
  user: any,
  surveyList: any
}

/** 쿠키 매번 넣어줄 때는 이렇게 귀찮으니 interceptor로 구현*/
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, query }) {
    try {
      const surveyList = await httpSurveyReadAll(req.session.user, query);
      // console.debug(`SUJIN:: ~ getServerSideProps ~ surveyList`, surveyList)
      return {
        props: {
          user: req?.session?.user ?? null,
          surveyList
        }
      }
    } catch (error) {
      console.debug(`SUJIN:: ~ getServerSideProps ~  error`, error)
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
  console.debug(`SUJIN:: ~ list`, list)

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const isLogin = useRecoilValue(authIsLogin);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const router = useRouter()

  const [limit, setLimit] = useState<number>(10);
  console.debug(`SUJIN:: ~ limit`, limit)
  const [itemCount, setItemCount] = useState(list.meta.itemCount);
  const [currentPage, setCurrentPage] = useState(list.meta.currentPage);
  const [totalPages, setTotalPages] = useState(list.meta.totalPages);

  const moveDetail = (listItemsId: string) => router.push(`/survey-board/${listItemsId}`)

  const getTotalPages = (currentPage: number, totalPages: number) => {

    const basis = Math.floor((currentPage - 1) / limit);
    const start = basis * 10 + 1;
    const end = start + 9 < totalPages ? start + 9 : totalPages;

    let totalPagesArr: any = [];

    for (let i = start; i <= end; i++) {
      totalPagesArr.push(i);
    }

    // console.debug(`SUJIN:: ~ getTotalPages ~ totalPagesArr`, totalPagesArr)
    return totalPagesArr;
  }

  const [paginate, setPaginate] = useState(getTotalPages(list.meta.currentPage, list.meta.totalPages));
  // console.debug(`SUJIN:: ~ paginate`, paginate)

  const loadSurveyList = async (page: number = 1, limit: number) => {
    if (page < 1 || totalPages < page) return;

    const options = { page, limit }
    console.debug(`SUJIN:: ~ loadSurveyList ~ limit`, limit)

    setCurrentPage(page);
    const surveyListAll = await httpSurveyReadAll(userInfo, options)
    const newPagination = getTotalPages(surveyListAll.meta.currentPage, surveyListAll.meta.totalPages)
    setPaginate(newPagination)
    // list 새로 받아 옴
    setList(surveyListAll)
    router.replace({
      pathname: '/survey-board/list',
      query: options,
    })
  }


  return (
    <DefaultTemplate>
      {/* <button onClick={() => { httpTest() }}>test-button</button> */}
      <div css={boardListStyle}>
        <div className="board-list-container">
          <div className="per-page-count">
            <span>Show rows per page</span>
            <Select size={'sm'} defaultValue={'10'} onChange={(e) => setLimit(+e.target.value)}>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
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
                  {/* <Th>Tag</Th> */}
                </Tr>
              </Thead>
              <Tbody>
                {
                  list.items.map(({ title, time, target, endDate, id }: any, index: number) => {
                    return <Tr key={index}>
                      <Td onClick={() => moveDetail(id)}>{title}</Td>
                      <Td>{time}</Td>
                      <Td>{target}</Td>
                      <Td>{dayjs(+endDate).format('YYYY-MM-DD')}</Td>
                      {/* <Td>
                        <HStack spacing={4}>
                          <Tag variant='solid' colorScheme='blue'>tag1</Tag>
                          <Tag variant='solid' colorScheme='blue'>tag2</Tag>
                          <Tag variant='solid' colorScheme='blue'>tag3</Tag>
                        </HStack>
                      </Td> */}
                    </Tr>
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
          {
            isLogin && <Button onClick={onOpen} className='write-button'>Write</Button>
          }
          <div className="pagination">
            <ul>
              <li onClick={() => loadSurveyList(currentPage - 1, limit)}>prev</li>
              {
                paginate.map((page: number, index: number) => {
                  return <li key={index} onClick={() => loadSurveyList(page, limit)} className={page === currentPage ? 'active' : ''}>{page}</li>
                })
              }
              <li onClick={() => loadSurveyList(currentPage + 1, limit)}>next</li>
            </ul>
          </div>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            onCloseComplete={() => { loadSurveyList(1, limit) }}
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