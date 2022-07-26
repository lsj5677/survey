/** @jsxImportSource @emotion/react */
import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tag, useDisclosure } from "@chakra-ui/react"
import dayjs from "dayjs"
import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent, useRef } from "react"
import { httpSurveyReadDetail, httpSurveyReadDetailCustom } from "../../http/survey.http"
import { boardDetailStyle } from "../../styles/survey-board/detail.style"
import DefaultTemplate from "../../template/default.template"
import { withSessionSsr } from "../../utils/session.util"
import { MdDoubleArrow } from "react-icons/md";
import Edit from "../../ui/modal/edit"
import { SSRPropsContext } from "../../types/util.type"
import { useRecoilValue } from "recoil"
import { authIsLogin } from "../../selectors/auth.selector"

interface IBoardListIdProps {
  user: any,
  surveyDetail: any
}

/** 쿠키 매번 넣어줄 때는 이렇게 귀찮으니 interceptor로 구현*/
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, params }: SSRPropsContext) {
    try {
      // const surveyDetail = await httpSurveyReadDetail(req.session.user, params);
      const res = await req.ssrAxios(() => httpSurveyReadDetailCustom(params));
      const surveyDetail = res.data;

      return {
        props: {
          user: req?.session?.user ?? null,
          surveyDetail
        }
      }
    } catch (error) {
      return {
        props: {
          user: req?.session?.user ?? null,
          surveyDetail: [],
        },
      };
    }
  },
);

const Detail: FunctionComponent<IBoardListIdProps> = ({ user, surveyDetail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const isLogin = useRecoilValue(authIsLogin);

  return (
    <DefaultTemplate>
      <div css={boardDetailStyle}>
        <div className="board-detail-container">
          <div className="detail-header">
            <h4>{surveyDetail.title}</h4>
            <span>{dayjs(surveyDetail.createdAt).format('YYYY-MM-DD')}</span>
          </div>
          <div className="detail-body">
            <ul className="survey-info">
              <li>[소요시간] : {surveyDetail.time}</li>
              <li>[마감일자] : {dayjs(+surveyDetail.endDate).format('YYYY-MM-DD')}</li>
            </ul>
            <p>
              <span>[상세설명]</span>
              {
                surveyDetail.description ? surveyDetail.description : <span className="empty">설명이 없습니다.</span>
              }
            </p>
            <a href={`https://${surveyDetail.link}`} target='_blank' rel='noreferrer' className="go-to-link">
              GO TO LINK <MdDoubleArrow />
            </a>
          </div>
          <div className="button-group">
            {
              isLogin && surveyDetail.userId === user?.id &&
              <>
                <Button onClick={onOpen}>Edit</Button>
                <Link href={'/'}>Delete</Link>
              </>
            }
            <Link href={'/survey-board/list'}>List</Link>
          </div>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            // onCloseComplete={() => { loadSurveyList(1, limit) }}
            size={'xl'}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Write</ModalHeader>
              <ModalBody pb={6}>
                <Edit onClose={onClose} surveyDetail={surveyDetail} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default Detail