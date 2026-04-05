import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SectionWrapper } from './style'

interface IProps {
  children?: ReactNode
  title: string
  more?: string
  morePath?: string
}

const SectionHeader: FC<IProps> = (props) => {
  const { title, more, morePath } = props

  return (
    <SectionWrapper>
      <h3 className="title">{title}</h3>
      {more ? <a href={morePath}>{more} &gt;</a> : ''}
    </SectionWrapper>
  )
}

export default memo(SectionHeader)
