import React from 'react'

export default function Dashboard() {
    return (
      <div id="page-container" className="main-admin">
	  	<div className="side-bar">
	  		<div className="side-bar-links">
	  			<div className="side-bar-logo text-center py-3">
	  				<h3>HELP RECOVER ADMIN PANNEL</h3>
	  			</div>
	  		</div>
	  	</div>
  	<div className="main-body-content w-100 ets-pt">
  		<div className="table-responsive bg-light">
		  <table class="table table-striped table-bordered">
			<thead class="thead-dark" >
				<tr>
				<th scope="col">#</th>
				<th scope="col">Utilisateur signalé</th>
				<th scope="col">Description</th>
				<th scope="col">Preuves</th>
				</tr>
			</thead>
			<tbody>
				<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
				</tr>
				<tr>
				<th scope="row">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
			</tbody>
		</table>
  		</div>
  	</div>
</div>
    )
}
