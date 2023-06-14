function is_user_banned($mcanida9@gmail.com){
  return mysql_result(
      mysql_query(
        "SELECT COUNT ('mcanida9@gmail.com') FROM 'users' where 'email_address = $mcanida9@gmail.com and is_banned = 1"
      )
  )
}

function login($username, $email_address, $password){
  if (is_user_banned(email_address) == true){
      //show error message and deny access
  }
}
