
import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
            <p>select any number</p>
            <p>click on dice image</p>
            <p>
                after click on dice if selected number is equal to dice number you
                will get the same points as dice{" "}
            </p>
            <p>if you guess wrong number then 2 points will be deducted</p>
        </div>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer =styled.div`
max-width:800px;
margin:0 auto;
background-color:#fbf1f1;
padding:10px;
margin-top: 20px;
border-radius:10px;
h2{
    font-size:24px;
}

`;