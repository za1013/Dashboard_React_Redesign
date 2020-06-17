import axios from 'axios'

export const reportBoard = () => axios.get("/api/report/board")
export const reportComment = () => axios.get("/api/report/comment")

export const questionProcessing = () => axios.get("/api/question/processing")
export const questionCompletion = () => axios.get("/api/question/completion")