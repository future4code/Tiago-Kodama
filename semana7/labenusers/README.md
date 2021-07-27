# Labenusers

## Mock of date

### User
```
    {
        "name": "string",
        "email": "string",
        "id": "string" 
    }
```

## Mock of design

### Hierarchy

- App
    - Navbar
- Users List
    - User
- Sign Up


### Minimun state and props

- App
    - state
        - page
- Users List
    - state
        - allUsers
    - props
        database
- Sign up
    - state
        inputName
        inputEmail
    - props
        - database