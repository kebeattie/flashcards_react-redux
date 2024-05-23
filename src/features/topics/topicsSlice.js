import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}},
    reducers: {
        addTopic: (state, action) => {
            const {name, id, icon} = action.payload;

            state.topics[id] = {
                id: id,
                name: name,
                icon: icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            const { topicId, id } = action.payload;
            state.topics[topicId].quizIds.push(id);

        }
    }
})


export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;