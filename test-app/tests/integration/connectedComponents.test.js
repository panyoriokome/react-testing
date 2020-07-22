import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import App from '../../src/App';

describe("Test for Connected Components", () => {
  test("add todo", () => {
    const textMessage = 'sakata is a dog and is 3 years old.'
    const {} = render(
      <App />
    )
    // �t�H�[���ɓ���
    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: {value: 'sakata'}
    })
    fireEvent.change(screen.getByPlaceholderText(/species/i), {
      target: {value: 'dog'}
    })
    fireEvent.change(screen.getByPlaceholderText(/age in years/i), {
      target: {value: 3}
    })

    // �ǉ��{�^�����N���b�N����To DO��ǉ�
    fireEvent.click(screen.getByText(/add Pet/i))

    // Todo���ǉ�����Ă��邱�Ƃ��m�F
    expect(screen.getByText(textMessage)).toBeDefined()
  })


  test("call zen api", async () => {
    const textMessage = 'sakata is a dog and is 3 years old.'
    const {} = render(
      <App />
    )

    
    await waitFor(() => {
      expect(screen.getByTestId('Zen')).toHaveTextContent()
    })
    screen.debug()
  })
})