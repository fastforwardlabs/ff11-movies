import * as chroma from 'chroma-js'

export let red = chroma('#ffbb3a').luminance(0.625)
export let blue = chroma('#3affbb').luminance(0.625)
export let scaleRed = chroma.scale(['#ddd', red]).mode('lch')
export let scaleBlue = chroma.scale(['#ddd', blue]).mode('lch')
export let scaleTextRed = chroma.scale(['white', red]).mode('lch')
export let scaleTextBlue = chroma.scale(['white', blue]).mode('lch')

export function colorExtend(color, x0, x1, y0, y1) {
  return `-${x0}px -${y0}px 0 ${color}, ${x1}px -${y0}px 0 ${color}, ${x1}px ${y1}px 0 ${color}, -${x0}px ${y1}px 0 ${color}`
}

export function readableSentiment(value) {
  if (value === 0) {
    return 'all negative'
  } else if (value < 0.1) {
    return 'very negative'
  } else if (value < 0.25) {
    return 'mostly negative'
  } else if (value < 0.5) {
    return 'somewhat negative'
  } else if (value === 0.5) {
    return 'split'
  } else if (value < 0.75) {
    return 'somewhat positive'
  } else if (value < 0.9) {
    return 'mostly positive'
  } else if (value < 1) {
    return 'very positive'
  } else if (value === 1) {
    return 'all positive'
  }
}

export let class_labels = ['negative', 'positive']
