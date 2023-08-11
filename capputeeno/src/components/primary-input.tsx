import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: var(--bg-secondary);
    padding: 10px 16px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
`

const InputContainer = styled.div`
    position: relative;
    width: 250px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%)
    }

    @media (min-width: 768px){
      width: 352px;
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  handleChange: (value: string) => void
}

export function PrimaryInputWithSearchIcon(props: InputProps){
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props} />
            <SearchIcon/>
        </InputContainer>
    )
}