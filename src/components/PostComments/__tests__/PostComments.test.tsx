/* eslint-disable @typescript-eslint/no-unused-expressions */
import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  test("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  }),
    test("Deve inserir dois comentários", () => {
      render(<PostComment />);
      const botao = screen.getByTestId("btn-adicionar-comentario");
      fireEvent.click(botao);
      fireEvent.click(botao);
      const comentariosRenderizados = screen.getAllByTestId("comentario");
      expect(comentariosRenderizados).toHaveLength(2);
    });
});
