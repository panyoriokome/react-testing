import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../../src/App';

describe("Test for Connected Components", () => {
  test("add todo", () => {
    const textMessage = 'sakata is a dog and is 3 years old.'
    const {} = render(
      <App />
    )
    // フォームに入力
    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: {value: 'sakata'}
    })
    fireEvent.change(screen.getByPlaceholderText(/species/i), {
      target: {value: 'dog'}
    })
    fireEvent.change(screen.getByPlaceholderText(/age in years/i), {
      target: {value: 3}
    })

    // 追加ボタンをクリックしてTo DOを追加
    fireEvent.click(screen.getByText(/add Pet/i))

    // Todoが追加されていることを確認
    expect(screen.getByText(textMessage)).toBeDefined()
  })
})