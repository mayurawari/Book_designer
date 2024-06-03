
import { ChakraProvider } from '@chakra-ui/react'
import { BookForm } from './components/bookform'

function App() {

  return (
    <ChakraProvider>
      <BookForm />
    </ChakraProvider>
  )
}

export default App
