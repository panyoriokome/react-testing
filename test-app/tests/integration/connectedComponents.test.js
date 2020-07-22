import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../../src/App';

describe("Test for Connected Components", () => {
  test("ToDoを追加し、追加したTodoが表示されていることを確認", () => {
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

  test("GitHubのZenAPIを呼んで結果が表示されることを確認する", async () => {
    const textMessage = 'sakata is a dog and is 3 years old.'
    const {} = render(
      <App />
    )
    
    await waitFor(() => {
      expect(screen.getByTestId('Zen')).toBeDefined()
    })
    screen.debug()
  })
})