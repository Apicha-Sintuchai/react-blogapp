import { useEffect, useState } from 'react'

import axios from 'axios'


type something = {
    map(arg0: (res: something, index: number) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
    title: string,
    description: string,
    file: string
}

const App = () => {
 
  const [blogs, setBlogs] = useState<something | null>(null)    
   
  const getapi = async () => {
      await axios.get('http://localhost:3000/blog-app')
      .then((res) => {
          setBlogs(res.data)
          console.log(res.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }
useEffect(() => {
  getapi()
}, [])

//http://localhost:3000/Picsave/LINE%E5%85%AC%E5%BC%8F%E3%80%80%E5%86%99%E7%9C%9F%E3%81%A8%E3%83%9C%E3%82%BF%E3%83%B3%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%AA%E3%83%AA%E3%83%83%E3%83%81%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC.jpg
  
  return (
      <>
          <div>
              {
                  blogs ? blogs.map((res: something, index: number) => (
                      <div key={index}>
                          <h1>{res.title}</h1>
                          <h1>{res.description}</h1>
                          <img src={'http://localhost:3000/Picsave/' + res.file} alt="" />
                      </div>
                  )) : <div> no data </div>
              }
          </div>
      </>
  )
}

export default App