import React from "react";

const ListagemSenhas = () => {
  return (
    <div className="container p-3 my-5 mt-5 ">
      <div className="table-responsive mt-5">
        <table class="table table-striped table-hover" id="table-lista">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Data</th>
              <th scope="col">Lembrete</th>
              <th scope="col">Visualizar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>10/10/2021</td>
              <td>gov.br</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                >
                  Visualizar
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>10/10/2021</td>
              <td>instagram</td>
              <td>
              <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                >
                  Visualizar
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>10/10/2021</td>
              <td>facebook</td>
              <td>
              <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modal1"
                >
                  Visualizar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="modal fade"
        id="modal1"
        tabindex="-1"
        aria-labelledby="modal1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal1">
                Informações Detalhadas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium ea praesentium delectus vel dignissimos aliquam! Officia sit reiciendis facere. Quam maiores nisi velit reprehenderit doloremque eaque magni officiis ullam?
            Deleniti dicta optio voluptates tenetur ipsa. Ut soluta officia placeat qui dolores recusandae adipisci, iusto excepturi a alias maiores tempore maxime esse dolorum. Molestiae ex officiis voluptas dolore magnam accusamus.
            Et beatae blanditiis at, fuga repellat itaque voluptatum sed deleniti natus voluptas, expedita eligendi rerum id cum laboriosam repellendus ut. Dolores deleniti blanditiis veniam eaque quia ea laboriosam autem vel?
            Similique veritatis dolorum in, sequi suscipit obcaecati corrupti quam quo ullam, laudantium nam error laboriosam placeat sint repellat vero eveniet tempora! Laboriosam officiis odit aspernatur, odio sint doloremque quia non?
            Ducimus nesciunt a aspernatur incidunt temporibus ipsam provident in amet architecto, fuga tenetur. Provident blanditiis, aperiam obcaecati eos ad incidunt harum porro nostrum hic labore explicabo accusamus ipsa sint maiores.</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListagemSenhas;
