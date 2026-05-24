ANTLR4 is one of the most powerful
parser generators available today.

## 1. Why SQL parsing is difficult

Every SQL dialect differs:

- PostgreSQL
- Oracle
- SQL Server
- MySQL

## 2. Architecture

```txt
Client
  ↓
Lexer
  ↓
Parser
  ↓
AST Transformer
  ↓
SQL Generator
```

## 3. Challenges

The most difficult part was:

- Nested query handling
- Vendor-specific syntax
- AST transformation
