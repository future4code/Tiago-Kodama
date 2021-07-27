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
        - Sign Up
- Users List
    - User
        - Info name
        - Button Delete
- Sign Up
    - Input name
    - Input email
    - Button Submit

### Minimun state and props

- App
    - state
        - page
- Users List
    - state
        - allUsers
- Sign up
    - state
        inputName
        inputEmail