
import 'styled-components/macro'
import React from 'react'

export default function StyledComponentMacro(props) {
    return <div css={`background: palevioletred`} {...props} />
}