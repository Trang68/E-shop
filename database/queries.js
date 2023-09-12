const Pool = require('pg').Pool ;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'eshop-db',
  password: 'mysecretpassword',
  port: 7432,
}) ;

const getAllDepartment = async (req, res) => {
  // console.log(await pool.query('SELECT NOW()'))
  console.log(pool)
  await pool.query("SELECT * FROM department", (error, results) => {
    console.log("getAllDepartment")
      if (error) {
        console.log(error)
        res.status(404) ;
        return ;
      }
      console.log(results);
      res.status(200).json(results.rows) ;
  }) ;
  //console.log(pool)

} ;

module.exports = {getAllDepartment};
