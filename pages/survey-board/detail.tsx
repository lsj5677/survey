/** @jsxImportSource @emotion/react */
import { HStack, Tag } from "@chakra-ui/react"
import Link from "next/link"
import { boardDetailStyle } from "../../styles/survey-board/detail.style"
import DefaultTemplate from "../../template/default.template"

const Detail = () => {
  return (
    <DefaultTemplate>
      <div css={boardDetailStyle}>
        <div className="board-detail-container">
          <div className="detail-header">
            <h4>this title area</h4>
            <span>2022-06-25</span>
          </div>
          <div className="detail-body">
            <span>End date : 2022-07-03</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates maiores neque earum alias excepturi unde fugit odit sequi iste error culpa,
              facilis molestias nihil. Quibusdam odit maiores eaque hic similique in distinctio animi
              quas officia consequuntur quae expedita ducimus, vel sapiente ipsam ad modi velit dolor quo
              facilis asperiores placeat!
            </p>
            <Link href={'/'}>
              <div className="link-box">
                <span className="link-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                <span className="go-to-link">GO TO LINK &gt;</span>
              </div>
            </Link>
          </div>
          <div className="detail-footer">
            <HStack spacing={2} className='tag-list'>
              <Tag variant='solid'>tag1</Tag>
              <Tag variant='solid'>tag2</Tag>
              <Tag variant='solid'>tag3</Tag>
            </HStack>
          </div>
          <Link href={'/'}>List</Link>
        </div>
      </div>
    </DefaultTemplate>
  )
}

export default Detail