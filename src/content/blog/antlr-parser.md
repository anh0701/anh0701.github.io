# Building SQL Parser with ANTLR4

ANTLR4 is one of the most powerful
parser generators available today.

## Why SQL parsing is difficult

Every SQL dialect differs:

- PostgreSQL
- Oracle
- SQL Server
- MySQL

---

## Architecture

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

## Challenges

The most difficult part was:

- nested query handling
- vendor-specific syntax
- AST transformation
