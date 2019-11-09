import { observer } from "mobx-react"
import React, { useState } from "react"
import { View } from 'react-native';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';
import { mapping, light } from '@eva-design/eva';

// import { createRootStore } from "./src/store"
import { TodoListView } from './src/TodoListView';

global.Buffer = global.Buffer || require('buffer').Buffer;
const { createRootStore } = require('./src/store');

// we use mobx-react to connect to the data, as it is usual in mobx
// this library is framework agnostic, so it can work anywhere mobx can work
// (even outside of a UI)

export default observer(() => {
  const [rootStore] = useState(() => createRootStore())

  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      <TodoListView list={rootStore} />
    </ApplicationProvider>
  )
});