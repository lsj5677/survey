/** @jsxImportSource @emotion/react */
import { HStack, Tag } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { FunctionComponent } from "react"
import { httpSurveyReadAll, httpSurveyReadDetail } from "../../http/survey.http"
import { boardDetailStyle } from "../../styles/survey-board/detail.style"
import DefaultTemplate from "../../template/default.template"
import { withSessionSsr } from "../../utils/session.util"

interface IBoardListIdProps {
  user: any,
  surveyList: any
}

/** 쿠키 매번 넣어줄 때는 이렇게 귀찮으니 interceptor로 구현*/
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, query }) {
    console.debug(`SUJIN:: ~ getServerSideProps ~ req`, req)
    try {
      const surveyList = await httpSurveyReadDetail(req.session.user, query);
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

const Detail: FunctionComponent<IBoardListIdProps> = ({ surveyList }) => {
  console.debug(`SUJIN:: ~ surveyList 222`, surveyList)

  const router = useRouter()
  const { postId } = router.query
  console.log('postId: ', postId);

  return (
    <DefaultTemplate>
      <div css={boardDetailStyle}>
        <div className="board-detail-container">
          <div className="detail-header">
            <h4>this title area</h4>
            <span>2022-06-25</span>
          </div>
          <div className="detail-body">
            <span className="end-date">End date : 2022-07-03</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates maiores neque earum alias excepturi unde fugit odit sequi iste error culpa,
              facilis molestias nihil. Quibusdam odit maiores eaque hic similique in distinctio animi
              quas officia consequuntur quae expedita ducimus, vel sapiente ipsam ad modi velit dolor quo
              facilis asperiores placeat!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic at omnis tempora libero. Perferendis tenetur molestias, sit eum laborum assumenda non sapiente magni vero quam consectetur placeat adipisci omnis dolorum architecto aliquam obcaecati explicabo aut, in, molestiae ratione ipsum. Beatae cumque architecto hic sit quasi ipsam ipsa, accusantium quibusdam tenetur nemo consequatur eveniet tempora ut odio deserunt voluptas at natus laborum magnam veritatis aut, minus perspiciatis, quia officiis! Hic molestiae nostrum amet quis doloremque ex dolor animi quibusdam. Nesciunt!
            </p>
            <Link href={'/'}>
              <div className="link-box">
                <span className="link-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <span className="go-to-link">GO TO LINK &gt;</span>
              </div>
            </Link>
          </div>
          <Link href={'/survey-board/list'}>Go back</Link>
        </div>
      </div>
    </DefaultTemplate>
  );
}

export default Detail