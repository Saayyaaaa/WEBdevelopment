import json

from django.http import JsonResponse
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [p.to_json() for p in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(
            name = data.get("name"),
            description = data.get("description"),
            address = data.get("address"),
            city = data.get("city")
        )
        print(data)
        return JsonResponse(company.to_json(), safe=False)


@csrf_exempt
def get_company(request, id):
    if request.method == 'GET':
        companies = Company.objects.get(id=id)
        data = companies.to_json()
        return JsonResponse(data)
    elif request.method == 'POST':
        print(request.method)


@csrf_exempt
def vacancies_by_company(request, id):
    if request.method == "GET":
        companies = [company.to_json() for company in Company.objects.filter(id=id)]
        return JsonResponse(companies, safe=False)


@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [p.to_json() for p in vacancies]
        return JsonResponse(vacancies_json, safe=False)


@csrf_exempt
def get_vacancy(request, id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.get(id=id)
        data = vacancies.to_json()
        return JsonResponse(data)


@csrf_exempt
def top_ten_vacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')[:10]
        vacancies_list = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_list, safe=False)
