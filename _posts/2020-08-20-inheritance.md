---
title: inheritance 
categories: [python]
comments: true
---

# Inheritance 

#### parent의 method, data 사용 가능 



```python
class parents: #파이썬은 다중상속 가능(c#,java x)
	'contents'

class child(parents):
  'contents'
  
```

```python
#예시
-----inheritance.py-----
class Country:
    """Super Class"""

    name = '국가명'
    population = '인구'
    capital = '수도'

    def show(self):
        print('국가 클래스의 메소드입니다.')


class Korea(Country):
    """Sub Class"""

    def __init__(self, name):
        self.name = name

    def show_name(self):
        print('국가 이름은 : ', self.name)
        
-----main.py-----
>>> from inheritance import *
>>> a = Korea('대한민국')
>>> a.show()
국가 클래스의 메소드입니다.
>>> a.show_name()
국가 이름은 :  대한민국
>>> a.capital
'수도'
>>> a.name
'대한민국'
```

#### Method overriding

```python
#위 예제의 Korea class의 부모 class의 method show 재정의
def show(self):
  print(
            """
            국가의 이름은 {} 입니다.
            국가의 인구는 {} 입니다.
            국가의 수도는 {} 입니다.
            """.format(self.name, self.population, self.capital)
        )
-------------------
#예시
>>> from inheritance import *
>>> a = Korea('대한민국', 50000000, '서울')
>>> a.show()
            국가의 이름은 대한민국 입니다.
            국가의 인구는 50000000 입니다.
            국가의 수도는 서울 입니다.

#부모 method 호출 방법 
>>> super().show()

#다중 상속 
class child(parents1,parents2,parents3):
  'contents'
```

- 참고로 파이썬은 오버로딩 지원 X



#### Reference 

- https://wikidocs.net/16073
