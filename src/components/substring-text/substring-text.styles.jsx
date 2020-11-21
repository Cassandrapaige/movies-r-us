import styled, {css} from 'styled-components'

export const SubstringContainer = styled.p`
font-size: 16px;
line-height: 22px;
color: white;

${props => props.bold && css`
    font-weight: 900;
    font-size: 18px;
`}
`
