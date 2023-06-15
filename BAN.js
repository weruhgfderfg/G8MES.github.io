function is_user_banned($4051mcani06@nwcsd.org){
  return mysql_result(
      mysql_query(
        "SELECT COUNT ('4051mcani06@nwcsd.org') FROM 'users' where 'email_address = $4051mcani06@nwcsd.org and is_banned = 1"
      )
  )
}

function login($username, $email_address, $password){
  if (is_user_banned(4051mcani06@nwcsd.org) == true){
      //show error message and deny access
  }
}
