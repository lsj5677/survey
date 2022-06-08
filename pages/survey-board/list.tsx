/** @jsxImportSource @emotion/react */
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import DefaultTemplate from "../../client/template/default.template"
import { getUserList } from "../../server/services/user.service"
import { boardListStyle } from "../../styles/survey-board/list.style"

interface IBoardList {

}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  await getUserList();

  return {
    props: {}
  }
}

const List = () => {
  return (
    <DefaultTemplate>
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
                <Tr>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                </Tr>
                <Tr>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                </Tr>
                <Tr>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                </Tr>
                <Tr>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                  <Td>test</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default List