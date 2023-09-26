const Pool = require('pg').Pool ;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'eshop-db',
  password: 'mysecretpassword',
  port: 7432,
}) ;

const getAllDepartment = async (req, res) => {
  console.log("HELLOOOOOOOO")
  console.log(res)
  // console.log(pool)
  await pool.query("SELECT * FROM department", (error, results) => {
      if (error) {
        console.log(error)
        res.status(404) ;
        return ;
      }
      console.log(results);
      res.status(200).json(results.rows) ;
      return results.rows;
  }) ;
} ;

module.exports = {getAllDepartment};
