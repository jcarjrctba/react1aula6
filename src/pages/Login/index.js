import "./styles.css";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Usuario from "../../components/Usuario";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("LOGIN");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const [showError, setShowError] = useState(false);
  const [inputColor, setInputColor] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([
    {
      email: "joao@oi.net.br",
      password: "oidevs",
    },
    {
      email: "jady@oi.net.br",
      password: "oidevs",
    },
    {
      email: "raniel@oi.net.br",
      password: "caneta", // azul
    },
  ]);

  return (
    <div className="container">
      <div className="box">
        <Title title={title} />
        {showError && <Usuario text="Credenciais inválidas" />}
        <Input
          label="Usuário"
          className={inputColor}
          passarValor={(e) => setNomeDeUsuario(e.target.value)}
        />
        <Input
          label="Senha"
          hideContent
          passarValor={(e) => setSenha(e.target.value)}
        />

        <Button
          button="Entrar"
          noClique={() => {
            const usuarioSelecionado = usuarios.find(
              (usuario) =>
                usuario.email === nomeDeUsuario && usuario.password === senha
            );

            if (usuarioSelecionado) {
              navigate("/home");
            } else {
              setInputColor("errorLabel");
              setShowError(true);
            }
          }}
        />
        <Button
          button="Será que muda?"
          noClique={() => {
            setTitle("Mudou ne kkk");
          }}
        />
        <Link span="Esqueci minha senha" url="https://www.google.com" />
      </div>
    </div>
  );
};

export default Login;
