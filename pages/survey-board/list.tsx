/** @jsxImportSource @emotion/react */
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { FunctionComponent } from "react"
import { httpSurveyReadAll, httpTest } from "../../http/survey.http"
import DefaultTemplate from "../../template/default.template"
import { boardListStyle } from "../../styles/survey-board/list.style"

interface IBoardListProps {
  res: any
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const res = await httpSurveyReadAll();
  console.log(`SUJIN:: ~ constgetServerSideProps:GetServerSideProps= ~ res`, res)

  return {
    props: { res }
  }
}

const List: FunctionComponent<IBoardListProps> = ({ res }) => {
  return (
    <DefaultTemplate>
      {/* <button onClick={() => { httpTest() }}>test</button> */}
      <div css={boardListStyle}>
        <div className="board-list-container">
          <TableContainer>
            <Table variant='striped'>
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Time</Th>
                  <Th>Target</Th>
                  <Th>Date</Th>
                  <Th>Tag</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  res.map(({ title, date, time, target, createdAt }: any, index: number) => {
                    return <Tr key={index}>
                      <Td>{title}</Td>
                      <Td>{time}</Td>
                      <Td>{target}</Td>
                      <Td>{date}</Td>
                      <Td>{createdAt}</Td>
                    </Tr>
                  })
                }
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default List