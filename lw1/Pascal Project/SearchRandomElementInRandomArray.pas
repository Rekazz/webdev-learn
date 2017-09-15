Program SearchRandomElementInRandomArray;
Uses Crt;
Const Max_Elem = 10;
Var
  Arr : Array [1..Max_Elem] Of Integer;
  Random_Value : Integer;
  IsFound : Boolean;
  I : Integer;
Begin
  Randomize;
  WriteLn('Вывод Массива: ');
  For I := 1 To Max_Elem Do 
  Begin
    Arr[I] := Random(15);
    Write(Arr[I], ' ');
  End;   
  WriteLn;  
  Random_Value := Random(15);
  IsFound := False;
  For I := 1 To Max_Elem Do
  Begin
    If (Arr[I] = Random_Value) Then 
    Begin
      IsFound := True;
      WriteLn('Элемент ', Random_Value, ' Найден!');
      Break;
    End;
  End;
  If (IsFound <> True) Then WriteLn('Элемент ', Random_Value, ' Не Был Найден!');
  ReadLn;
End.
