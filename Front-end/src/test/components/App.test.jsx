import React from 'react'
import App from './App.test'
import ReactShallowRender from 'react-test-renderer/shallow'


describe ('componentes -> App ' , ()=>{
test('deberia poder renderizar el componente',()=>{
    const renderer = new ReactShallowRender();

    renderer.render(<App/>);
    expect(renderer.getRenderOutput().toMatchSnapshot())

})

})