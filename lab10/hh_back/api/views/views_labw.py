import json

from django.http import JsonResponse
from hh_back.api.models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

from hh_back.api.serializers import CompanySerializer, CompanySerializer2


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        # companies_json = [p.to_json() for p in companies]
        # return JsonResponse(companies_json, safe=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer2(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)


        # company = Company.objects.create(
        #     name = data.get("name"),
        #     description = data.get("description"),
        #     address = data.get("address"),
        #     city = data.get("city")
        # )
        # print(data)

        # return JsonResponse({'asd': 1}, safe=False, status=201)



@csrf_exempt
def get_company(request, id):

    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)}, status=400)

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        # data = company.to_json()
        data = serializer.data
        return JsonResponse(data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(
            instance=company,
            data=data
        )
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

        # company.name = data.get("name")
        # company.save()
        # return JsonResponse(company.to_json(), safe=False)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})

@csrf_exempt
def vacancies_by_company(request, id):
    try:
        companies = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": str(e)})

    # vacancy_json = [vacancy.to_json() for vacancy in Company.vacancies.all()]
    # return JsonResponse(vacancy_json, safe=False)

    companies_json = [company.to_json() for company in Company.objects.filter()]
    return JsonResponse(companies_json, safe=False)


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
