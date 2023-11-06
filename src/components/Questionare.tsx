import { AnswerFont, QandA, QuestionareContainer, QuestionsRow, Title } from './styledComponents/QuestionareStyleComponents'

const Questionare = () => {
  return (
    <>
      <QuestionareContainer>
        <Title className='py-8'>Got Questions?</Title>
        <QuestionsRow>
          <QandA>
            <AnswerFont className='text-slate-100 pb-4'>How to Get Started?</AnswerFont>
            <AnswerFont className='text-[#f4d35e]'>Sign up for an account, browse through the movie battles, and cast your vote! Share with friends to spark discussions.</AnswerFont>
          </QandA>
          <QandA>
            <AnswerFont className='text-slate-100 pb-4'>Is this really free?</AnswerFont>
            <AnswerFont className='text-[#f4d35e]'>Absolutely! Movie Mania is completely free to use and join. Unleash your inner film critic today.</AnswerFont>
          </QandA>
          <QandA>
            <AnswerFont className='text-slate-100 pb-4'>Can I suggest battles?</AnswerFont>
            <AnswerFont className='text-[#f4d35e]'>Definitely! We encourage users to submit ideas for new movie battles. The more, the merrier!</AnswerFont>
          </QandA>
        </QuestionsRow>
        
      </QuestionareContainer>
    </>
  )
}

export default Questionare