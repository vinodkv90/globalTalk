import Courses from '@/components/Courses'
import Hero from '@/components/Hero'
import Statistics from '@/components/Statistics'
import Vocabulary from '@/components/Vocabulary'
import { COURSES, HERO, STATISTICS, VOCABULARY } from '@/constants/blockTypes'
import React, { useMemo } from 'react'

const setComponent = (widget) => {
    const component = {
        [HERO]: Hero,
        [COURSES]: Courses,
        [VOCABULARY]: Vocabulary,
        [STATISTICS]: Statistics,
        default: null
    }
    return component[widget.block_type] || component['default']
}

const Blocks = ({widget}) => {
    const Widget = useMemo(() => setComponent(widget), [widget.block_type])
    return <Widget {...widget} />
}

export default Blocks